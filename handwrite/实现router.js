/**
 * 路由核心实现（支持hash和history两种模式）
 */
class Router {
  /**
   * 初始化路由
   * @param {Object} options 配置项 { mode, routes }
   * @param {string} options.mode 路由模式：hash/history
   * @param {Array} options.routes 路由规则：[{ path, handler }]
   */
  constructor(options = {}) {
    // 路由模式（默认hash）
    this.mode = options.mode || 'hash';
    // 路由规则：[{ path: '/', handler: () => {} }, ...]
    this.routes = options.routes || [];
    // 当前路径
    this.currentPath = '';

    // 初始化路由
    this.init();
  }

  /**
   * 初始化：设置初始路径 + 监听URL变化
   */
  init() {
    // 1. 设置初始路径
    this.setCurrentPath();

    // 2. 监听URL变化
    if (this.mode === 'hash') {
      // hash模式：监听hashchange事件
      window.addEventListener('hashchange', () => this.handleUrlChange());
    } else {
      // history模式：监听popstate事件
      window.addEventListener('popstate', () => this.handleUrlChange());

      // 重写pushState和replaceState（这两个方法不会触发popstate）
      this.overrideHistoryMethods();
    }

    // 3. 初始渲染
    this.matchRoute();
  }

  /**
   * 设置当前路径
   */
  setCurrentPath() {
    if (this.mode === 'hash') {
      // hash模式：取#后面的部分（默认/）
      this.currentPath = window.location.hash.slice(1) || '/';
    } else {
      // history模式：取pathname（默认/）
      this.currentPath = window.location.pathname || '/';
    }
  }

  /**
   * 处理URL变化
   */
  handleUrlChange() {
    this.setCurrentPath();
    this.matchRoute(); // 重新匹配路由
  }

  /**
   * 重写history方法（history模式下）
   */
  overrideHistoryMethods() {
    const _this = this;
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    // 重写pushState
    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      _this.handleUrlChange(); // 手动触发路由更新
    };

    // 重写replaceState
    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      _this.handleUrlChange(); // 手动触发路由更新
    };
  }

  /**
   * 匹配路由并执行对应处理函数
   */
  matchRoute() {
    // 1. 尝试匹配路由规则
    const matchedRoute = this.routes.find(route => {
      // 支持简单动态路由，如: /user/:id
      if (route.path.includes(':')) {
        const regex = new RegExp(`^${route.path.replace(/:(\w+)/g, '([^/]+)')}$`);
        return regex.test(this.currentPath);
      }
      // 精确匹配（支持通配符*）
      return route.path === this.currentPath || route.path === '*';
    });

    // 2. 执行匹配到的处理函数
    if (matchedRoute) {
      // 提取动态路由参数（如:id）
      const params = this.extractParams(matchedRoute.path);
      matchedRoute.handler(params); // 传入参数执行处理函数
    } else {
      console.error('No matching route for:', this.currentPath);
    }
  }

  /**
   * 提取动态路由参数
   * @param {string} routePath 路由规则（如: /user/:id）
   * @returns {Object} 参数对象（如: { id: '123' }）
   */
  extractParams(routePath) {
    if (!routePath.includes(':')) return {};

    const params = {};
    const pathSegments = this.currentPath.split('/').filter(Boolean);
    const routeSegments = routePath.split('/').filter(Boolean);

    routeSegments.forEach((segment, index) => {
      if (segment.startsWith(':')) {
        const key = segment.slice(1); // 去掉冒号
        params[key] = pathSegments[index];
      }
    });

    return params;
  }

  /**
   * 导航到指定路径
   * @param {string} path 目标路径
   */
  navigate(path) {
    if (this.mode === 'hash') {
      window.location.hash = path; // hash模式直接修改hash
    } else {
      history.pushState(null, '', path); // history模式使用pushState
    }
  }
}

// --------------------------
// 使用示例
// --------------------------
// 1. 定义路由处理函数（渲染页面）
function renderHome() {
  document.getElementById('app').innerHTML = `
    <h1>首页</h1>
    <p>这是网站首页</p>
  `;
}

function renderUser(params) {
  document.getElementById('app').innerHTML = `
    <h1>用户页</h1>
    <p>用户ID: ${params.id}</p>
    <p>用户名: ${params.name || '未知'}</p>
  `;
}

function renderAbout() {
  document.getElementById('app').innerHTML = `
    <h1>关于我们</h1>
    <p>这是一个路由示例</p>
  `;
}

function render404() {
  document.getElementById('app').innerHTML = `
    <h1>404</h1>
    <p>页面未找到</p>
  `;
}

// 2. 创建路由实例
const router = new Router({
  mode: 'hash', // 可选 'hash' 或 'history'
  routes: [
    { path: '/', handler: renderHome },
    { path: '/user/:id/:name', handler: renderUser }, // 动态路由
    { path: '/about', handler: renderAbout },
    { path: '*', handler: render404 } // 404路由
  ]
});

// 3. 绑定导航按钮事件（编程式导航）
document.getElementById('btn-home').addEventListener('click', () => {
  router.navigate('/');
});

document.getElementById('btn-user').addEventListener('click', () => {
  router.navigate('/user/123/张三');
});

document.getElementById('btn-about').addEventListener('click', () => {
  router.navigate('/about');
});

document.getElementById('btn-404').addEventListener('click', () => {
  router.navigate('/not-found');
});
