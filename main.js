const peopleInput = document.getElementById('people')
const areaInput = document.getElementById('area')

peopleInput.addEventListener('change', showResult)
areaInput.addEventListener('change', showResult)

function calc (people, area) {
    const peopleBTU = people * 300
    let areaBTU = (Math.floor(area / 10) * 10) * 600

    let result = peopleBTU + areaBTU
    
    result = result < 12000 ? 12000 : result
    result = result > 12000 && result < 18000 ? 18000 : result
    result = result > 18000 && result < 24000 ? 24000 : result
    result = result > 24000 ? 30000 : result

    return result <= 24000 ? { caption: `${result}btu`, val: result } : { caption: 'Consulte con un ejecutivo', val: result}
}

function showResult () {
    const imgs = [
        './img/12k.jpg',
        './img/18k.jpeg',
        './img/24k.jpg',
        './img/consultant.jpg'
    ]
    const result = calc(peopleInput.value, areaInput.value)
    const img = imgs[Math.floor(((result.val * 2) / 12000) - 2)]

    document.querySelector('#recomendation').innerHTML = result.caption
    document.querySelector('#reco-img').src = img
}

showResult()