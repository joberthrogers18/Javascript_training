"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log('Exercício 1');

var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      console.log(this.admin);
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('teste@gmail.com', 'senha123');
var Admin1 = new Admin('admin@gmail.com', 'senha123');
User1.isAdmin();
Admin1.isAdmin();
console.log('Exercício 2');
var usuarios = [{
  nome: 'Jobs',
  idade: 23,
  empresa: 'Vagabounds'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var map = usuarios.map(function (item) {
  return item.idade;
});
console.log("idade dos meus brothes ".concat(map));
var filter = usuarios.filter(function (item) {
  return item.idade >= 18 && item.empresa === 'Rocketseat';
});
console.log('Usando o Filter' + filter);
var find = usuarios.find(function (item) {
  return item.empres === 'Google';
});
console.log("Usando o find atr\xE1s de algu\xE9m que trabalhe no google ".concat(find));
var resultadoUsuarios = usuarios.map(function (item) {
  item.idade *= 2;
  return item;
});
resultadoUsuarios = resultadoUsuarios.filter(function (item) {
  return item.idade < 50;
});
console.log(resultadoUsuarios);
console.log('Exercício 3'); // 3.1

var arr = [1, 2, 3, 4, 5];
var newArray = arr.map(function (item) {
  return item + 10;
});
console.log(newArray); //3.2

var usuario2 = {
  nome: 'Jobs',
  idade: 20
};

var mostrarIdade = function mostrarIdade(_ref) {
  var idade = _ref.idade;
  return idade;
};

console.log(mostrarIdade(usuario2)); //3.3

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log("Exercício 4"); //REST

var empresa = {
  nome1: 'Rocketseat',
  endereco1: {
    cidade1: 'Rio do SUl',
    estado1: 'SC'
  }
};
var nome1 = empresa.nome1,
    _empresa$endereco = empresa.endereco1,
    cidade1 = _empresa$endereco.cidade1,
    estado1 = _empresa$endereco.estado1;
console.log(nome1);
console.log(cidade1);
console.log(estado1); // 4.2

function mostraInfo(_ref2) {
  var nome2 = _ref2.nome2,
      idade2 = _ref2.idade2;
  return "".concat(nome2, " tem ").concat(idade2, " anos.");
}

console.log(mostraInfo({
  nome2: 'Jobs',
  idade2: 88
}));
console.log("Exercício 5");
var arr2 = [1, 2, 3, 4, 5, 6];
var x = arr2[0],
    y = arr2.slice(1);
console.log(x);
console.log(y);

function soma1() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma1(6, 5, 4, 3, 2, 1)); //SPREAD

var usuario3 = {
  nome: 'Jobs',
  idade: 25,
  endereco: {
    cidade: 'Rios do Sul',
    uf: 'SC',
    país: 'Brasil'
  }
};

var usuario4 = _objectSpread({}, usuario3, {
  nome: 'Gabriel'
});

console.log(usuario4);

var usuario5 = _objectSpread({}, usuario3, {
  endereco: _objectSpread({}, usuario3.endereco, {
    cidade: 'Lontras'
  })
});

console.log(usuario5);
console.log('Exercício 6');
var user = 'Jobs';
var idadeUser = 20;
console.log("O usu\xE1rio ".concat(user, "  possui ").concat(idadeUser, " anos!"));
console.log('Exercício 7');
var name = "Diego";
var age = 23;
var us = {
  name: name,
  age: age,
  city: "Rio do Sul"
};
console.log(us);
