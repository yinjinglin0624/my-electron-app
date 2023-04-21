console.log(`嘿嘿${versions.chrome()}`)
console.log(`嘿嘿${versions.node()}`)
const func = async () => {
    const res = await window.versions.ping()
    console.log(res)
}

func()