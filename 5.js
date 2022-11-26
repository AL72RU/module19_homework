class Pribor {
  constructor(name, power) {
    this.type = 'Электроприбор';
    this.name = name;
    this.power = power;    //кВт
  }
  getPower() {
    if (this.power >= 1) {
      return true;
    } else {
      return false;
    }
  }
}

class PriborAdd extends Pribor {
  constructor(name, power, connected) {
    super(name, power);
    this.connected = connected; //включен или выключен
  }
  info() {
    let warning = '';
    if (this.getPower() && (this.connected)) {
      warning = ', (Осторожно! Высокое напряжение!)';
    }
    console.log(`${this.name}, ${this.power} кВт${warning}`);
  }
}

const svarka = new PriborAdd ('Сварка', 3.5, true);  
svarka.info();

const computer = new PriborAdd ('Компьютер', 0.6, false);  
computer.info();