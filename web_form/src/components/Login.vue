<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <div class="login_content">
      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :counter="12"
          label="Phone"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
        ></v-text-field>

        <v-btn
          class="mr-4"
          @click="submit"
        >
          提交
        </v-btn>
        <v-btn @click="clear">
          清空
        </v-btn>
      </form>
    </div>
    <v-card-title>期待已久</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"a
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          迫不及待
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        辩则明
      </div>

      <div>你关心我，我关心你关心的~</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>最火辩论场</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>theme1：金钱是万恶之源</v-chip>
        <v-chip>theme2：是否该废除死刑</v-chip>
        <v-chip>theme3：环境与科技：先发展，还是先治理</v-chip>
        <v-chip>theme4：资本主义与社会主义</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="logon"
      >
        登录
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<style lang="scss">
  .login{
    width:    100%;
    height:   100%;
    position: absolute;
    .box-card {
      width: 450px;
      margin: 5% auto;
    }
  }


</style>

<!--<script type="text/javascript" src="../components/login.js"></script>-->

<script text='' type="text/javascript">
  export default {
    data: () => ({
      name: '',
      phone: '',
      email: '',
      select: null,
      selection: null,
    }),

    methods: {
      logon () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
        this.$router.push('/home')
      },
      submit () {
        this.$router.push('/home')
      },
      clear () {
        this.name = ''
        this.phone = ''
        this.email = ''
      },
    },

    computed: {
      nameErrors () {
        const errors = []
        if (!this.name.$dirty) return errors
        !this.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.email.$dirty) return errors
        !this.email.email && errors.push('Must be valid e-mail')
        !this.email.required && errors.push('E-mail is required')
        return errors
      },

    },
  }
</script>



