const router = async () => {
    const routes = [
        {path: "/", view: () => console.log("viewing Dashboard")},
        {path: "/posts", view: () => console.log("viewing posts")},
        {path: "/settings", view: () => console.log("viewing settings")},
    ];

    // test each route for a potential match! 
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    // selecting the match
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    if (!match) {
        match = { 
        route: routes[0],
        isMatch: true
        }
    }

 
};




document.addEventListener('DOMContentLoaded', router)