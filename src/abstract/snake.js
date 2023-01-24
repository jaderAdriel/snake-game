export class Snake {

    constructor (props) {

        this.ctx = props.ctx;

        this.speed = 100;

        this.border = props.border || {
            x: 400,
            y: 400
        }

        this.head = '';

        this.tail = props.tail || [];

        this.headColor = props.headColor || 'black';

        this.tail = props.tailColor || 'black';

        this.position = props.position || {
            x: 0,
            y: 0,
        }

        this.area = props.area || {
            x : 20,
            y : 20
        }

        this.direction = props.direction || {
            x : 0,
            y : 0
        }

        this.draw()
    }

    draw () {
        this.ctx.fillStyle = this.headColor;
        this.ctx.fillRect(
            this.position.x, this.position.y, 
            this.area.x, this.area.y
        );
    }

    update () {

        const newPosition = {
            x: this.position.x + this.area.x * this.direction.x ,
            y: this.position.y + this.area.y * this.direction.y 
        }

        this.setPosition( newPosition );
        
        this.draw()
    }

    setDirection (direction) {
        this.direction = direction;
    }

    setPosition (newPosition) {
        if ( 0 > newPosition.x || 0 > newPosition.y) return;

        if ( newPosition.x >= this.border.x || newPosition.y >= this.border.y) return;

        this.position = newPosition;
    }
}



