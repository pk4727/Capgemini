import FullList from "./FullList";

interface DOMList {
    render(FullList: FullList): void
}

export default class LIstTemplate implements DOMList {

    static instance: LIstTemplate = new LIstTemplate()

    render(FullList: FullList): void {

    }
}