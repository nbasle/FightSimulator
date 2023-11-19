class Personnage {
  constructor(pseudo, classe, sante, attaque) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;
  }

  evoluer() {
    this.niveau++;
    console.log(this.pseudo + " passe au niveau " + this.niveau + "!");
  }

  verifierSante() {
    if (this.sante <= 0) {
      this.sante = 0;
      console.log(this.pseudo + " a perdu !");
    }
  }

  get informations() {
    return(
      this.pseudo +
        " (" +
        this.classe +
        ") a " +
        this.sante +
        " points de vie et est au niveau " +
        this.niveau +
        "."
    );
  }
}

class Magicien extends Personnage{

    constructor(pseudo)
    {
        super(pseudo, "magicien", 170, 90);
    }
    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(this .pseudo+" attaque "+personnage.pseudo +" en lançant un sort ("+this. attaque +" dégâts)");
        this.evoluer();
        this.verifierSante();
    }
    coupSpecial(personnage) {
        personnage.sante -= 5 * this.attaque;
        console.log(this.pseudo +" attaque avec son coup spécial puissance des arcanes "+personnage.pseudo+ " (" +this.attaque * 5+ " dégâts)");
        this.evoluer();
        this.verifierSante();
    }
}
class Guerrier extends Personnage {
    constructor(pseudo){
        super(pseudo, "guerrier", 350, 50);
    }
    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(this .pseudo+" attaque "+personnage.pseudo +" avec son épée ("+this. attaque +" dégâts)");
        this.evoluer();
        this.verifierSante();
    }
    coupSpecial(personnage) {
        personnage.sante -= 5 * this.attaque;
        console.log(this.pseudo +" attaque avec son coup spécial haches de guerre "+personnage.pseudo+ " (" +this.attaque * 5+ " dégâts)");
        this.evoluer();
        this.verifierSante();
    }
}

var gandalf = new Magicien('Gandalf');
var thor    = new Guerrier('Thor');
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);