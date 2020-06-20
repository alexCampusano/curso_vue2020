Vue.component('hijo',{
    template: //html
    `
    <div class="p-5 bg-success text-white">
        <h4>Componente hijo: {{numero}}</h4>
        <h1>Nombre: {{nombre}}</h1>
        <button @click="numero++">+</button>
    </div>
    `,
    props:['numero'],
    data(){
        return{
            nombre:"Alex"
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre)
    },
});