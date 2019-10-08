interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number,
        height: number
    }
}

const rect: Rect = {
    id: '124',
    size: {
        width: 1,
        height: 2
    },
    color: '#ccc'
};

const rect1: Rect = {
    id: '125',
    size: {
        width: 2,
        height: 3
    }
};

rect1.color = '#fff';
// rect1.id = '321'

const rect2 = {} as Rect;
const rect3 = <Rect>{};

// ================


interface RectWithArea extends Rect {
    getArea: () => number
}

const rect4: RectWithArea = {
    id: '125',
    size: {
        width: 2,
        height: 3
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
};


// ==============
interface IClock {
    date: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();

    setTime(date: Date): void {
        this.time = date;
    }
}

// ==============


interface Styles {
     [key: string]: string
}

const css: Styles = {
    border: '1px solid #000',
    marginTop: '2px',
    borderRadius: '5px'
};









