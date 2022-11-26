function Pribor() {
  this.type = 'Электроприбор',    
  this.getPower = function() {
    if (this.power >= 1) {      
      return true;
    } else {      
      return false;
    }
  }
}

function PriborAdd(name, power, connected) {
this.name = name,
this.power = power, //кВт
this.connected = connected //включен или выключен
}

PriborAdd.prototype = new Pribor();

PriborAdd.prototype.info = function () {
let warning = '';
if (this.getPower() && (this.connected)) {
  warning = ', (Осторожно! Высокое напряжение!)';
}
console.log(`${this.name}, ${this.power} кВт${warning}`);
}

const svarka = new PriborAdd ('Сварка', 3.5, true);  
svarka.info();

const computer = new PriborAdd ('Компьютер', 0.6, false);  
computer.info();