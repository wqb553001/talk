// import Vue from 'vue'

export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
