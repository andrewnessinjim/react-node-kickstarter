import * as db from "./db";

async function homePage() {
    const homePage = await db.get().collection("pages").findOne({pageName: "homePage"});
    return homePage;
}

export default {
    homePage: homePage
}