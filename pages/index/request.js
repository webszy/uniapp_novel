import to from 'await-to-js'
const baseUrl = 'https://ym-reader.netlify.app'

export const getList = async function(){
	const options = {
		url:`${baseUrl}/info/list.json`,
		method:'GET'
	}
	const [err,res] = await to(uni.request(options))
	console.log(err,res)
}