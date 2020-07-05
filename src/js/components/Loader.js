export default class Loader {
    constructor(btnSave, block) {
        this.btnSave = btnSave;
        this.block = block;
    }
    render(bool) {
        if (bool) {
            return this.block.setAttribute('style', 'display: block');
        } else {
            this.block.setAttribute('style', 'display: none');
        }
    }
}
