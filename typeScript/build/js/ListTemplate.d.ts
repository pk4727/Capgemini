import FullList from "./FullList";
interface DOMList {
    render(FullList: FullList): void;
}
export default class LIstTemplate implements DOMList {
    static instance: LIstTemplate;
    render(FullList: FullList): void;
}
export {};
//# sourceMappingURL=ListTemplate.d.ts.map