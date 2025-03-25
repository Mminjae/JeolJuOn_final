const { createApp } = Vue;

let vm = createApp({
  name: 'Vue',
  data() {
    return {
      activeTab: 0,
      tabs: [
        { id: 1, title: "공지사항" },
        { id: 2, title: "소식" },
        { id: 3, title: "언론보도" },
      ]
    }
  },
});
vm.mount('#vue');