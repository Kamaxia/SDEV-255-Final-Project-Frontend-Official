const token = localStorage.getItem("token");
if (!token) {
    window.location.href = "login.html";
}

window.onload = () =>{
    getClass()
}


async function getClass(){
    let response = await fetch("http://localhost:3000/register")
    let data = await response.json()
    console.log(data)
    document.getElementById("course1Title").innerText = data.classes[0].title
    document.getElementById("course2Title").innerText = data.classes[1].title
    document.getElementById("course3Title").innerText = data.classes[2].title
    document.getElementById("course4Title").innerText = data.classes[3].title
    document.getElementById("course5Title").innerText = data.classes[4].title
    document.getElementById("course6Title").innerText = data.classes[5].title
    document.getElementById("course7Title").innerText = data.classes[6].title
    document.getElementById("course8Title").innerText = data.classes[7].title
    document.getElementById("course1Desc").innerText = data.classes[0].description
    document.getElementById("course2Desc").innerText = data.classes[1].description
    document.getElementById("course3Desc").innerText = data.classes[2].description
    document.getElementById("course4Desc").innerText = data.classes[3].description
    document.getElementById("course5Desc").innerText = data.classes[4].description
    document.getElementById("course6Desc").innerText = data.classes[5].description
    document.getElementById("course7Desc").innerText = data.classes[6].description
    document.getElementById("course1Desc").innerText = data.classes[7].description
    document.getElementById("course1Inst").innerText = data.classes[0].instructor
    document.getElementById("course2Inst").innerText = data.classes[1].instructor
    document.getElementById("course3Inst").innerText = data.classes[2].instructor
    document.getElementById("course4Inst").innerText = data.classes[3].instructor
    document.getElementById("course5Inst").innerText = data.classes[4].instructor
    document.getElementById("course6Inst").innerText = data.classes[5].instructor
    document.getElementById("course7Inst").innerText = data.classes[6].instructor
    document.getElementById("course8Inst").innerText = data.classes[7].instructor
    document.getElementById("course1Sched").innerText = data.classes[0].schedule
    document.getElementById("course2Sched").innerText = data.classes[1].schedule
    document.getElementById("course3Sched").innerText = data.classes[2].schedule
    document.getElementById("course4Sched").innerText = data.classes[3].schedule
    document.getElementById("course5Sched").innerText = data.classes[4].schedule
    document.getElementById("course6Sched").innerText = data.classes[5].schedule
    document.getElementById("course7Sched").innerText = data.classes[6].schedule
    document.getElementById("course8Sched").innerText = data.classes[7].schedule
    document.getElementById("course1Meth").innerText = data.classes[0].method
    document.getElementById("course2Meth").innerText = data.classes[1].method
    document.getElementById("course3Meth").innerText = data.classes[2].method
    document.getElementById("course4Meth").innerText = data.classes[3].method
    document.getElementById("course5Meth").innerText = data.classes[4].method
    document.getElementById("course6Meth").innerText = data.classes[5].method
    document.getElementById("course7Meth").innerText = data.classes[6].method
    document.getElementById("course8Meth").innerText = data.classes[7].method

}