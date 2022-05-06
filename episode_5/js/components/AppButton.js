export default{
    template: `
        <button 
            :class="{
                'border rounded bold px-2 py-1': true,
                'bg-indigo-600 hover:bg-indigo-800': type === 'primary',
                'bg-slate-200 hover:bg-slate-400': type === 'secondary',
                'bg-gray-400 text-gray-300': type === 'muted',
                'is-loading': processing
            }" 
            :disabled="processing"
        >
            <slot />    
        </button>
    `,

    props: {
        type: {
            type :String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            processing: false
        }
    }
}