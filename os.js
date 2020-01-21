const os = require('os')
const mem = os.freemem() / os.totalmem() * 100
console.log(mem)

const cpuStat = require('cpu-stat')
cpuStat.usagePercent((err, percent) => {
    console.log(percent)
})
const cores = cpuStat.totalCores()
console.log(cores)