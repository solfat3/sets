interface Compare {
    compare: (x: any) => Boolean
}

class Food implements Compare {
    public name: String;
    public sprite: Sprite;
    constructor(name: String, image: Image, x: number, y: number) {
        this.name = name;
        this.sprite = sprites.create(image);
        this.sprite.setPosition(x, y)
    }
    compare(x: Food) {
        return this.name == x.name && this.sprite.image == x.sprite.image;
    }
}

class Set<T extends Compare> {
    collection: Array<T>;
    constructor() {
        this.collection = [];
    }
    get(obj: T): T {
         for (let i = 0; i < this.collection.length; i++){
            if (this.collection[i].compare(obj)) {
                return this.collection[i];
            }
        }
        return null;
    }
    has(obj: T) : Boolean {
        //check if item already exists
        console.log(JSON.parse(JSON.stringify(obj)));
        for (let i = 0; i < this.collection.length; i++){
            if (this.collection[i].compare(obj)) {
                return true;
            }
        }
        return false;
    }
    add(obj: T) { 
        //add to collection, but check if item already exists
        if (this.has(obj)) {
            return -1;
        }
        this.collection.push(obj);
        return this.collection.length - 1;
    }
    remove(obj: T) {
        for (let i = 0; i < this.collection.length; i++) {
            if (this.collection[i].compare(obj)) {
                this.collection.removeAt(i);
            }
        }
    }
    size() {
        return this.collection.length;
    }
}

let spriteSet = new Set<Food>();
let sprite1 = new Food("burger", img`
             . . . . c c c b b b b b . . . .
             . . c c b 4 4 4 4 4 4 b b b . .
             . c c 4 4 4 4 4 5 4 4 4 4 b c .
             . e 4 4 4 4 4 4 4 4 4 5 4 4 e .
             e b 4 5 4 4 5 4 4 4 4 4 4 4 b c
             e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e
             e b b 4 4 4 4 4 4 4 4 4 4 4 b e
             . e b 4 4 4 4 4 5 4 4 4 4 b e .
             8 7 e e b 4 4 4 4 4 4 b e e 6 8
             8 7 2 e e e e e e e e e e 2 7 8
             e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e
             e c 6 7 6 6 7 7 7 6 6 7 6 c c e
             e b e 8 8 c c 8 8 c c c 8 e b e
             e e b e c c e e e e e c e b e e
             . e e b b 4 4 4 4 4 4 4 4 e e .
             . . . c c c c c e e e e e . . .
    `, 20, 80 );
let sprite2 = new Food("apple", img`
    . . . . . . . e c 7 . . . . . .
    . . . . e e e c 7 7 e e . . . .
    . . c e e e e c 7 e 2 2 e e . .
    . c e e e e e c 6 e e 2 2 2 e .
    . c e e e 2 e c c 2 4 5 4 2 e .
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
    . e e e 2 2 2 2 2 2 2 2 2 4 e .
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
    . . 2 e e 2 2 2 2 2 4 4 2 e . .
    . . . 2 2 e e 4 4 4 2 e e . . .
    . . . . . 2 2 e e e e . . . . .
    `, 60, 80);
let sprite3 = new Food("lemon", img`
    4 4 4 . . 4 4 4 4 4 . . . . . .
    4 5 5 4 4 5 5 5 5 5 4 4 . . . .
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . .
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . .
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 .
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 .
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c
    . . c 4 4 d 4 4 4 4 4 d d 5 d c
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4
    . . . . c c b 4 4 4 b b 4 5 4 4
    . . . . . . c c c c c c b b 4 .
    `, 100, 80);
let sprite4 = new Food("meat", img`
    . . 2 2 b b b b b . . . . . . .
    . 2 b 4 4 4 4 4 4 b . . . . . .
    2 2 4 4 4 4 d d 4 4 b . . . . .
    2 b 4 4 4 4 4 4 d 4 b . . . . .
    2 b 4 4 4 4 4 4 4 d 4 b . . . .
    2 b 4 4 4 4 4 4 4 4 4 b . . . .
    2 b 4 4 4 4 4 4 4 4 4 e . . . .
    2 2 b 4 4 4 4 4 4 4 b e . . . .
    . 2 b b b 4 4 4 b b b e . . . .
    . . e b b b b b b b e e . . . .
    . . . e e b 4 4 b e e e b . . .
    . . . . . e e e e e e b d b b .
    . . . . . . . . . . . b 1 1 1 b
    . . . . . . . . . . . c 1 d d b
    . . . . . . . . . . . c 1 b c .
    . . . . . . . . . . . . c c . .
    `, 140, 80);
let cursor = sprites.create(img`
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    1 . . . . . . . . . . . . . . 1
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
`);
cursor.setPosition(20, 80);
let curcount = 0;
let textSprite = textsprite.create(" ")
function selectedSprite() {
    let selected = null;
    switch(cursor.x) {
        case 20: selected = sprite1; break;
        case 60: selected = sprite2; break;
        case 100: selected = sprite3; break;
        case 140: selected = sprite4; break;
    }
    return selected;
}
game.onUpdateInterval(250, function() {
    if (curcount < 3 && controller.right.isPressed()) {
        cursor.setPosition(cursor.x + 40, 80);
        curcount++;
        textSprite.setText(" ");
 }
    if (curcount > 0 && controller.left.isPressed()) {
        cursor.setPosition(cursor.x - 40, 80);
        curcount--;
        textSprite.setText(" ");
 }
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    let selected = selectedSprite();
    if (spriteSet.has(selected)) {
        console.log(selected.name);
        textSprite.setText("duplicate");
    } else {
        spriteSet.add( new Food(selected.name, selected.sprite.image, cursor.x, 40) );
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function() {
    let selected = selectedSprite();
    if (spriteSet.has(selected)) {
        spriteSet.get(selected).sprite.destroy();
        spriteSet.remove(selected);
        textSprite.setText(" ");
    }
})