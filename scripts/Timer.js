class Timer {
  constructor(container, options = {}) {
    this.container =
      typeof container === "string"
        ? document.querySelector(container)
        : container;
    this.options = {
      size: 200,
      strokeWidth: 8,
      colors: {
        track: "#e0e0e0",
        progress: "#2d5ae0",
        text: "#333333",
        alert: "#ff0000",
      },
      ...options,
      colors: {
        ...{
          track: "#e0e0e0",
          progress: "#2d5ae0",
          text: "#333333",
          alert: "#ff0000",
        },
        ...(options.colors || {}),
      },
    };
    this.totalSeconds = 300;
    this.remainingSeconds = 60;
    this.currentState = 'idle';  // idle, running, paused, alert
    this.animationId = null;
    this.isAnimated = true;

     this.canvas = null;
        this.ctx = null;
        this.centerX = 0;
        this.centerY = 0;
        this.radius = 0;

    this.init();
  }

  init() {
    this.container.innerHTML = "";

    this.canvas = document.createElement('canvas');
    this.container.appendChild(this.canvas)
  }
}
