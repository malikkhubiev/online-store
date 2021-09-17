const addDevice = async () => {
    const formData = new FormData() // В постмэне, не json row, а формдата
    formData.append('name', name)
    formData.append('price', `${price}`) // Т.к. тип должен быть или Blob, или string, Blob - набор битов (например можно отправить файл, типа картинки) 
    formData.append('img', file)
    formData.append('brandId', из стора)
    formData.append('typeId', из стора)
    formData.append('info', JSON.stringify(info)) // Переделываем в json, а сервер распарсит
    await makeDevice(formData)
    закрыть модальное окно()
}