/* eslint-disable max-len */
module.exports = class Data {
    /**
     *
     * @constructor
     * @param {String} CodUsuario
     * @param {String} Nombres
     * @param {String} Apellidos
     * @param {String} Direccion
     * @param {String} FechaDeNacimiento
     * @param {boolean} CuentaActiva
     * @param {number} NroHijos
     * @param {number} Saldo
     */
    
      constructor(CodUsuario, Nombres, Apellidos, Direccion, FechaDeNacimiento, CuentaActiva, NroHijos, Saldo) {
         this.CodUsuario=CodUsuario;
         this.Nombres=Nombres;
         this.Apellidos=Apellidos;
         this.Direccion=Direccion;
         this.FechaDeNacimiento=FechaDeNacimiento;
         this.NroHijos=NroHijos;
         this.CuentaActiva=CuentaActiva;   
         this.Saldo=Saldo;
      }
    };
    