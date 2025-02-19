"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const msg_js_1 = __importDefault(require("msg.js"));
const BrowserInfo_1 = __importDefault(require("../BrowserInfo"));
const Alert_1 = __importDefault(require("../component/dialogue/Alert"));
const UserInfo_1 = __importDefault(require("../component/UserInfo"));
const ArkContract_1 = __importDefault(require("../contracts/ArkContract"));
const InitialSaleContract_1 = __importDefault(require("../contracts/InitialSaleContract"));
const InitialSaleReceiverContract_1 = __importDefault(require("../contracts/InitialSaleReceiverContract"));
const InjeolmiContract_1 = __importDefault(require("../contracts/InjeolmiContract"));
const SInjeolmiContract_1 = __importDefault(require("../contracts/SInjeolmiContract"));
const YearendAirdropContract_1 = __importDefault(require("../contracts/YearendAirdropContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Home {
    constructor() {
        let select;
        Layout_1.default.current.title = (0, msg_js_1.default)("HOME");
        Layout_1.default.current.content.append((this.container = (0, skynode_1.el)(".home-view", (0, skynode_1.el)("section", (0, skynode_1.el)(".top-banner", (0, skynode_1.el)(".banner-image0"), (0, skynode_1.el)(".banner-image1", (0, skynode_1.el)("img", { src: "/images/injeolmi.png" }), (0, skynode_1.el)("h2", (0, msg_js_1.default)("TITLE_DESC")), (0, skynode_1.el)("h1", (0, msg_js_1.default)("TITLE"))), (0, skynode_1.el)("a.banner-image2", {
            href: "https://gall.dcinside.com/mini/board/view/?id=defidev&no=47&s_type=search_subject_memo&s_keyword=%EC%9D%B8%EC%A0%88%EB%AF%B8&page=1",
            target: "_blank"
        }))), (0, skynode_1.el)(".gnb", (0, skynode_1.el)(".item-container", (0, skynode_1.el)("a.item", (0, msg_js_1.default)("INTRODUCTION_MENU"), { click: () => { ViewUtil_1.default.go("/introduce"); } }), (0, skynode_1.el)("a.item", (0, msg_js_1.default)("SIGOR"), { click: () => { new Alert_1.default((0, msg_js_1.default)("SIGRO_POPUP_TITLE"), (0, msg_js_1.default)("SIGRO_POPUP_DESC")); } }), (0, skynode_1.el)("a.item", "집문서 NFT", { click: () => { ViewUtil_1.default.go("/housedeeds"); } }), (0, skynode_1.el)("a.item", (0, msg_js_1.default)("SPARROW_NFT"), { click: () => { ViewUtil_1.default.go("/sparrows"); } }), (0, skynode_1.el)("a.item", (0, msg_js_1.default)("MEME_NFT"), { click: () => { ViewUtil_1.default.go("/meme-nft"); } }), (0, skynode_1.el)("a.item", (0, msg_js_1.default)("JUNIOR_MENU"), { click: () => { ViewUtil_1.default.go("/junior"); } }), (0, skynode_1.el)("a.item", (0, msg_js_1.default)("CLASSIC"), { click: () => { ViewUtil_1.default.go("/classic"); } }), select = (0, skynode_1.el)("select.language-select", (0, skynode_1.el)("option", "한국어", { value: "ko" }), (0, skynode_1.el)("option", "English", { value: "en" }), (0, skynode_1.el)("option", "日本語", { value: "jp" }), (0, skynode_1.el)("option", "繁体字", { value: "zh-CN" }), (0, skynode_1.el)("option", "簡體字", { value: "zh-TW" }), (0, skynode_1.el)("option", "Tiếng Việt", { value: "vn" }), (0, skynode_1.el)("option", "ภาษาไทย", { value: "TH" }), (0, skynode_1.el)("option", "짹짹어", { value: "짹짹어" }), {
            change: () => {
                BrowserInfo_1.default.changeLanguage(select.domElement.value);
            },
        }))), (0, skynode_1.el)("section", (0, skynode_1.el)(".content-container", (0, skynode_1.el)(".left-container", (0, skynode_1.el)(".price-container", (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", (0, msg_js_1.default)("IJM_PRICE")), (0, skynode_1.el)(".price", (this.priceDisplay = (0, skynode_1.el)("span.price", "...")), ""), (0, skynode_1.el)("button", (0, msg_js_1.default)("CHART_BUTTON"), {
            click: () => {
                window.open("https://dexata.kr/?tokenA=0x0268dbed3832b87582b1fa508acf5958cbb1cd74&tokenB=");
            }
        })), (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", (0, msg_js_1.default)("YOUR_IJM_DESC")), (0, skynode_1.el)(".price", (this.balanceDisplay = (0, skynode_1.el)("span.price", "...")), " IJM"), (0, skynode_1.el)("button", (0, msg_js_1.default)("ADD_IJM_BUTTON"), {
            click: () => Wallet_1.default.addToken(InjeolmiContract_1.default.address, "IJM", 18, "https://tteok.org/images/injeolmi.png"),
        }))), (0, skynode_1.el)(".price-container", (0, skynode_1.el)(`${BrowserInfo_1.default.language !== "ko" ? ".en-content" : ".content"}`, (0, skynode_1.el)("h3", (0, msg_js_1.default)("GET_HARD_FORK_IJM_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("GET_HARD_FORK_IJM_DESC")), (0, skynode_1.el)(".price", (this.hardforkDisplay = (0, skynode_1.el)("span.price", "...")), " IJM"), (0, skynode_1.el)("button", (0, msg_js_1.default)("GET_BUTTON"), {
            click: () => ArkContract_1.default.receiveNew(),
        })), (0, skynode_1.el)(`${BrowserInfo_1.default.language !== "ko" ? ".en-content" : ".content"}`, (0, skynode_1.el)("h3", (0, msg_js_1.default)("RECEIVE_BOUGHT_IJM_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("RECEIVE_BOUGHT_IJM_DESC")), (0, skynode_1.el)(".price", (this.initialSaleDisplay = (0, skynode_1.el)("span.price", "...")), " IJM"), (0, skynode_1.el)("button", (0, msg_js_1.default)("GET_BUTTON"), {
            click: () => InitialSaleReceiverContract_1.default.receiveNew(),
        })), (0, skynode_1.el)(`${BrowserInfo_1.default.language !== "ko" ? ".en-content" : ".content"}`, (0, skynode_1.el)("h3", (0, msg_js_1.default)("GET_YEAR_END_EVENT_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("GET_YEAR_END_EVENT_DESC")), (0, skynode_1.el)(".price", (this.yearendDisplay = (0, skynode_1.el)("span.price", "...")), " IJM"), (0, skynode_1.el)("button", (0, msg_js_1.default)("GET_BUTTON"), {
            click: () => YearendAirdropContract_1.default.receiveNew(),
        }))), (0, skynode_1.el)(".group-issue", (0, skynode_1.el)(".issue_area", (0, msg_js_1.default)("SPARROW_NEWS_TITLE")), (0, skynode_1.el)("a.issue", (0, msg_js_1.default)("SPARROW_NEWS_DESC1"), {
            href: "https://res.cloudinary.com/drznekqaq/image/upload/v1643110626/fishing1_plte9l.jpg",
            target: "_blank"
        }), (0, skynode_1.el)("a.issue", (0, msg_js_1.default)("SPARROW_NEWS_DESC2"), {
            href: "https://res.cloudinary.com/drznekqaq/image/upload/v1643110626/fishing2_kner5x.jpg",
            target: "_blank"
        }), (0, skynode_1.el)("a.issue", (0, msg_js_1.default)("SPARROW_NEWS_DESC3"), {
            href: "https://res.cloudinary.com/drznekqaq/image/upload/v1643110626/fishing3_ab4ftd.jpg",
            target: "_blank"
        })), (0, skynode_1.el)(".form", (0, skynode_1.el)("p", "인절미와 시고르 집문서가 가이아 프로토콜로 통합 과정 중에 있습니다."), (0, skynode_1.el)("p", "곧 해당 내용에 대해 공지드리겠습니다."), (0, skynode_1.el)("p", "자산들에 대해 끝까지 책임지겠습니다.")), (0, skynode_1.el)(".form", (0, skynode_1.el)("h3", "절미 적금"), (0, skynode_1.el)(".caption", "절미를 넣어두면 수익을 나눠줘서 예치한 절미가 계속 늘어나!"), (0, skynode_1.el)(".caption", "총 예치한 절미: ", (this.totalStakedDisplay = (0, skynode_1.el)("span.price", "...")), " IJM"), (0, skynode_1.el)(".caption", "너가 예치한 절미: ", (this.withdrawableDisplay = (0, skynode_1.el)("span.price", "...")), " IJM"), (0, skynode_1.el)(".input-container", this.stakeInput = (0, skynode_1.el)("input", {
            placeholder: "인절미 수량 입력",
        }), (0, skynode_1.el)("button", "예치하기", {
            click: async () => {
                await SInjeolmiContract_1.default.stake(ethers_1.utils.parseEther(this.stakeInput.domElement.value));
                ViewUtil_1.default.waitTransactionAndRefresh();
            },
        })), (0, skynode_1.el)(".input-container", this.unstakeInput = (0, skynode_1.el)("input", {
            placeholder: "인절미 수량 입력",
        }), (0, skynode_1.el)("button", "출금하기", {
            click: async () => {
                await SInjeolmiContract_1.default.unstake(ethers_1.utils.parseEther(this.unstakeInput.domElement.value));
                ViewUtil_1.default.waitTransactionAndRefresh();
            },
        }))), (0, skynode_1.el)(".suggest-container", (0, skynode_1.el)("h3", (0, msg_js_1.default)("SUGGEST_TITLE")), (0, skynode_1.el)(".content", (0, skynode_1.el)(".suggest", (0, skynode_1.el)("p", (0, msg_js_1.default)("SUGGEST_DESC1")), (0, skynode_1.el)("button", (0, msg_js_1.default)("SUGGEST_BUTTON1"), {
            click: () => { window.open("https://klu.bs/pfp/0x29d05593116C443da54DaBFB4e5322DEA2fff8Cd"); }
        })), (0, skynode_1.el)(".suggest", (0, skynode_1.el)("p", (0, msg_js_1.default)("SUGGEST_DESC2")), (0, skynode_1.el)("button", (0, msg_js_1.default)("SUGGEST_BUTTON2"), {
            click: () => { window.open("https://github.com/tteokmill/injeolmi"); }
        })), (0, skynode_1.el)(".suggest", (0, skynode_1.el)("p", (0, msg_js_1.default)("SUGGEST_DESC3")), (0, skynode_1.el)("button", (0, msg_js_1.default)("SUGGEST_BUTTON3"), {
            click: () => { ViewUtil_1.default.go("/classic"); }
        })))), (0, skynode_1.el)(".banner", (0, skynode_1.el)("img", {
            src: "/images/thankyou.gif"
        }))), (0, skynode_1.el)(".right-container", (0, skynode_1.el)(".connect-wallet", (0, skynode_1.el)(".caption", (0, msg_js_1.default)("CONNECT_WALLET_DESC")), new UserInfo_1.default()), (0, skynode_1.el)(".community", (0, skynode_1.el)("h3", (0, msg_js_1.default)("COMMUNITY_TITLE")), (0, skynode_1.el)("a", (0, msg_js_1.default)("DISCORD_BUTTON"), { href: "https://discord.gg/YgdruRMFtJ", target: "_blank" }), (0, skynode_1.el)("a", (0, msg_js_1.default)("TWITTER_BUTTON"), { href: "https://twitter.com/sigorcsc", target: "_blank" }), (0, skynode_1.el)("a", (0, msg_js_1.default)("MEDIUM_BUTTON"), { href: "https://medium.com/tteok", target: "_blank" }), (0, skynode_1.el)("a", (0, msg_js_1.default)("GITHUB_BUTTON"), { href: "https://github.com/sigorgit", target: "_blank" }))))))));
        select.domElement.value = BrowserInfo_1.default.language.substring(0, 2);
        this.refresh();
        this.interval = setInterval(() => this.refresh(), 2000);
    }
    async refresh() {
        this.load();
    }
    async load() {
        if (this.container.deleted !== true) {
            this.priceDisplay.empty().appendText("0.004791 $");
        }
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const balance = await InjeolmiContract_1.default.balanceOf(address);
            if (this.container.deleted !== true) {
                this.balanceDisplay.empty().appendText(ethers_1.utils.formatEther(balance));
            }
            if (await ArkContract_1.default.received(address) === true) {
                if (this.container.deleted !== true) {
                    this.hardforkDisplay.empty().appendText("0");
                }
            }
            else {
                const records = await ArkContract_1.default.records(address);
                if (this.container.deleted !== true) {
                    this.hardforkDisplay.empty().appendText(ethers_1.utils.formatEther(records.mul(10000000000)));
                }
            }
            if (await InitialSaleReceiverContract_1.default.received(address) === true) {
                if (this.container.deleted !== true) {
                    this.initialSaleDisplay.empty().appendText("0");
                }
            }
            else {
                const bought = await InitialSaleContract_1.default.bought(address);
                if (this.container.deleted !== true) {
                    this.initialSaleDisplay.empty().appendText(ethers_1.utils.formatEther(bought.mul(11).div(10)));
                }
            }
            const toReceive = await YearendAirdropContract_1.default.toReceive(address);
            if (this.container.deleted !== true) {
                if (toReceive === true) {
                    this.yearendDisplay.empty().appendText("100");
                }
                else {
                    this.yearendDisplay.empty().appendText("0");
                }
            }
            const totalStaked = await InjeolmiContract_1.default.balanceOf(SInjeolmiContract_1.default.address);
            if (this.container.deleted !== true) {
                this.totalStakedDisplay.empty().appendText(ethers_1.utils.formatEther(totalStaked));
            }
            const withdrawable = await SInjeolmiContract_1.default.withdrawableIJM(address);
            if (this.container.deleted !== true) {
                this.withdrawableDisplay.empty().appendText(ethers_1.utils.formatEther(withdrawable));
            }
        }
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map