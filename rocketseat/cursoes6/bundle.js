/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Trabalhando com os arrays\n\n/*const  arr = [1,3,4,5,8,9]\r\n\r\nconst newArr = arr.map(function(item, index){\r\n    return item + index;\r\n});\r\n\r\nconsole.log(newArr);\r\n\r\nconst sum = arr.reduce(function(total, next){\r\n    return total + next;\r\n});\r\n\r\nconsole.log(sum);\r\n\r\nconst filter = arr.filter( function(item){\r\n    return item % 2 === 0;\r\n});\r\n\r\nconsole.log(filter);\r\n\r\nconst find = arr.find(function(item){\r\n    return item === 4;\r\n});\r\n\r\nconsole.log(find);*/\n// Arrow Function\n\n/*\r\nconst arr = [1,3,4,5,6];\r\n\r\nconst newArray2 = arr.map(item => item * 2); // arrow function não precisa do function, apenas o parametro, a flecha e o retorno (item*2)\r\n\r\nconsole.log(newArray2);\r\n\r\n*/\n//Destruturação\n\n/*\r\nconst usuario = {\r\n    nome: 'Diego',\r\n    idade : 23,\r\n    endereco: {\r\n        cidade: 'Rio do Sul',\r\n        estado: 'SC'\r\n    },\r\n};\r\n\r\nconst {nome, idade, endereco: {cidade}} = usuario;\r\n\r\nconsole.log(nome, idade, cidade);\r\n\r\nfunction mostrarNome({nome, idade}){\r\n    console.log(nome, idade);\r\n}\r\n\r\nmostrarNome(usuario);*/\n//REST\n\n/*const usuario = {\r\n    nome: \"Joberth Rogers\",\r\n    idade : 20,\r\n    empresa :\"VASP\"\r\n}\r\n\r\nconst { nome, ...resto } = usuario; // pega o resto de um objecto que nesse caso uma variavel salvou a idade e a empresa\r\n\r\nconsole.log(nome);\r\nconsole.log(resto); \r\n\r\nconst arr3 = [1,2,3,4,5,6,7,8,9];\r\n\r\nconst [a,b, ...c] = arr3; // para array;\r\nconsole.log(a);\r\nconsole.log(b);\r\nconsole.log(c);\r\n\r\nfunction soma(...params){   // rest para funções\r\n    return params.reduce((total, next) => total + next);\r\n}\r\n\r\nconsole.log(soma(1,2,3,4,5,6,7,8,9,11));\r\n\r\n//SPREAD\r\n\r\nconst array1 = [1,2,3];\r\nconst array2 = [4,5,6]; \r\n\r\nconst array3 = [...array1, ...array2];\r\nconsole.log(array3);\r\n\r\nconst usuario2 = {...usuario, nome: 'Ana'};\r\n\r\nconsole.log(usuario2);\r\n\r\n*/\n// TEMPLATE ITERABLE\n\n/*const nome = 'Jobs';\r\nconst idade = 20;\r\n\r\nconsole.log(`Meu nome é ${nome} e tenho ${idade} anos`); // com crase eu posso fazer essa trick no ES6;*/\n//Short object Syntax\nvar nome = 'Jobs';\nvar idade = 20;\nvar usuario = {\n  nome: nome,\n  // simplificação do nome em vez de colocar nome: nome\n  idade: idade,\n  empres: 'VASP'\n};\nconsole.log(usuario);\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });