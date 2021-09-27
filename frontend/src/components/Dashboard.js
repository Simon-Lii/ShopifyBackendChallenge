import React, {useEffect, useState} from 'react'
import SearchField from "react-search-field";
import axios from 'axios'
import SubmitForm from './SubmitForm'
import "../styles/dashboard.css"
import Scores from './Scores.js'
import {
	action,
	observable,
	toJS
  } from "mobx"




const Dashboard = ({user}) => {
	const [fileUploaded, setFileUploaded] = useState(0);
	const [file, setFile] = useState(0);
	const [setScores] = useState([]);
	var [image, setImg] = useState();

	useEffect(() => {
		const getScores = async () => {
			const scoresFromServer = await getScoreHistory();
			setScores(scoresFromServer)
		}

		getScores()
	},[])

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(file)
		const data = new FormData()
		data.append('file', file)
		data.append('username', user)
		console.log(user)
		axios.post('http://localhost:3000/api/upload', data)
		.then((result) => {window.location.replace(result.data.filename); window.location.reload()})
		.catch((result) => console.log(result))
	}

	const signOut = () => {
		axios.get('http://localhost:3000/api/sign_out').then().catch()
		window.location.href = "../"
	}

	const getScoreHistory = async () => {
		const res = await fetch('http://localhost:3000/api/history');
		const data = await res.json();
		return data.body
	}
	
	const findImage = (e) => {
		console.log("supsupsupsupsup", e)
		const resp = axios.get(`http://localhost:3000/api/image/${e}`, {responseType: "arraybuffer"})
		.then(action("success", resp => {
			console.log(resp)
			let base64string = Buffer.from(resp.data, 'binary').toString('base64')
			image = <img id = "imagemain" src={`data:image/jpeg;base64,${base64string}`} />
			setImg(image)
		}),
		action("fail", resp => {}))
	}

	return (
		<div id="dashboard-container" >
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark py-4">
				<div class="container-fluid">
					<h4 class="display-5 titler"> Simon Li</h4>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
					</button>
					<h3 id="header1"className="display-4 my-scores-title"> My Image Repository Backend Challenge </h3>
					<button class="btn btn-outline-info" onClick={signOut}>Sign Out</button>
				</div>
			</nav>
			<div id="main-content">
				<div id="upload-container" className="card">
					<h3 id = "upload1" className="display-6 upload-title"> Upload </h3>
					<div className="alert alert-warning"> Upload your image file, then click "send to the clouds". Wait a few seconds, then your image should be uploaded.</div>
					<SubmitForm handleSubmit={handleSubmit} setFile={setFile} file={file}/>
				</div>
				<SearchField
						placeholder=""
						onSearchClick={findImage}
						searchText=""
						classNames="test-class"
						/>
					<div id="history-container">
					{image}
					</div>
					<div id="upload-container" className="card">
					<h3 id = "upload1" className="display-6 upload-title"> Upload </h3>
					<div className="alert alert-warning"> Upload your image file, then click "send to the clouds". Wait a few seconds, then your image should be uploaded.</div>
					<SubmitForm handleSubmit={handleSubmit} setFile={setFile} file={file}/>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
