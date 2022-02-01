let DB_NAMESPACE = "reactnodekickstarter";

db.createUser(
    {
        user: "kickstarter-user",
        pwd: "kickstarter-pass",
        roles: [
            {
                role: "readWrite",
                db: DB_NAMESPACE
            }
        ]
    }
)

db.auth("kickstarter-user","kickstarter-pass");
const appDB = db.getSiblingDB(DB_NAMESPACE);

appDB.pages.insertOne({
    pageName: "homePage",
    heading: "Hello World!",
    reactMessage: "Edit src/App.tsx and save to reload. ",
    toolSets: [{
            heading: "Source code in",
            tools: [{
                    logoKey : "typescript",
                    toolTip: ""
                },{
                    logoKey : "pug",
                    toolTip: ""
                },{
                    logoKey : "sass",
                    toolTip: ""
                },{
                    logoKey : "svg",
                    toolTip: ""
                }]
        },{
            heading: "Using",
            tools: [{
                    logoKey : "apollo",
                    toolTip: "",
                    logoHeightPx: 24
                },{
                    logoKey : "express",
                    toolTip: "",
                    logoHeightPx: 18
                },{
                    logoKey : "graphql",
                    toolTip: ""
                },{
                    logoKey : "reactjs",
                    toolTip: ""
                },{
                    logoKey : "mongodb",
                    toolTip: ""
                }]
        },{
            heading: "Transformed by",
            tools: [{
                    logoKey : "gulp",
                    toolTip: ""
                },{
                    logoKey : "webpack",
                    toolTip: ""
                },{
                    logoKey : "babel",
                    toolTip: ""
                }]
        },{
            heading: "Transformed into",
            tools: [{
                    logoKey : "html",
                    toolTip: ""
                },{
                    logoKey : "javascript",
                    toolTip: ""
                },{
                    logoKey : "css",
                    toolTip: ""
                }]
        },{
            heading: "Executed in",
            tools: [{
                    logoKey : "nodejs",
                    toolTip: ""
                },{
                    logoKey : "nodemon",
                    toolTip: ""
                },{
                    logoKey : "browsers",
                    toolTip: ""
                }]
        },{
            heading: "Packaged into",
            tools: [{
                    logoKey : "docker",
                    toolTip: ""
                }]
        },{
            heading: "Test cases in",
            tools: [{
                    logoKey : "jest",
                    toolTip: ""
                },{
                    logoKey : "cypress",
                    toolTip: ""
                }]
        },{
            heading: "Built, tested and deployed by",
            tools: [{
                    logoKey : "circleci",
                    toolTip: ""
                }
            ]
        },{
            heading: "Deployed to",
            tools: [{
                    logoKey : "heroku",
                    toolTip: ""
                }
            ]
        },{
            heading: "Dependencies managed by",
            tools: [{
                    logoKey : "npm",
                    toolTip: "",
                    logoHeightPx: 18
                }
            ]
        },{
            heading: "Version controlled by",
            tools: [{
                    logoKey : "git",
                    toolTip: ""
                },{
                    logoKey : "github",
                    toolTip: ""
                }
            ]
        },{
            heading: "IDE used",
            tools: [{
                    logoKey : "vscode",
                    toolTip: ""
                }
            ]
        }
    ]
});