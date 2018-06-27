/**
 * Created by hasee on 2018/6/27.
 */
import { mapGetters }  from 'vuex'

export const changeMixin = {
  computed: {
    ...mapGetters([
      'newsCategory',
      'authUser'
    ])
  }
}