class SubMenu extends Menu{
    constructor (name, desc, parent) {
        super(name, desc);
        this.name = name;
        this.desc = desc;
        this.parent = parent;
    }
}