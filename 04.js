const app = new Vue({
	el:'#app',
	data: {
		saludo : 'ciclo de vida de vue'
	},
	beforeCreate(){
		console.log('before');
	},
	created(){
		// Al cear los metodos observadores de eventos, pero aun no accede al DOM
		// Aun no se puede acceder a 'el'
		console.log('created');
	},
	beforeMount(){
		// Se ejecuta antes de insertar el DOM
		console.log('beforeMount');
	},
	mounted(){
		// se ejecuta al insertar el DOM
		console.log('mounted');
	},
	beforeUpdate(){
		// al detectar un cambio
		console.log('beforeUpdate');
	},
	updated(){
		// al realizar los cambios
		console.log('updated');
	},
	beforeDestroy(){
		// antes de destruir la instancia
		console.log('beforeDestroy');
	},
	destroyed(){
		// se destruye toda la instancia
		console.log('destroyed');
	},
	methods:{
		destruir(){
			this.$destroy()
		}
	}


})