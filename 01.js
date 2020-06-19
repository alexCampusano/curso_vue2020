const app = new Vue({
	el:'#app',
	data: {
		titulo: 'La venta de Mermeladas',
		mermeladas:[
			{nombre:'frutilla', cantidad:12},
			{nombre:'arandanos', cantidad:9},
			{nombre:'mora', cantidad:0}
		],
		nuevaMerme : '',
		total: 0
	},
	methods:{
		agregarMerme(){
			this.mermeladas.push({
				nombre:this.nuevaMerme
			});
			this.nuevaMerme = ''
		}
	},
	computed:{
		sumarMerme(){
			this.total = 0;
			for(merme of this.mermeladas){
				this.total = this.total + merme.cantidad;
			}
			return this.total;
		}
	}
})