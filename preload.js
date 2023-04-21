const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('versions', {
    node: ()=> process.versions.node,
    chrome: ()=> process.versions.chrome,
    electron: ()=> process.versions.electron,
    // 利用辅助函数来包裹 ipcRenderer.invoke('ping') 调用
    // 直接暴露ipcRenderer模块，渲染器能直接向主进程发送消息
    // 会使其成为恶意代码最强有力的攻击媒介
    ping: ()=>ipcRenderer.invoke('ping')
})