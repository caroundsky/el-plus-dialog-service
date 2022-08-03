const store: any = {}
export default {
  setInstance(id: string, proxy: any) {
    store[id] = proxy
  },
  getInstance(id: string) {
    return store[id]
  },
}
