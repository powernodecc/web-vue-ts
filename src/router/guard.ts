import {NavigationGuardNext, RouteLocationNormalized, Router} from "vue-router";

class Guard {

    constructor(private router: Router) {
    }

    public run() {
        this.router.beforeEach(this.beforeEach.bind(this))
    }

    private beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
        return next();
    }
}

export default (router: Router) => {
    new Guard(router).run()
}