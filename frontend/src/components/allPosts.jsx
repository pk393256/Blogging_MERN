import { AuthContext } from "../authContext/authContext";
import { useState, useEffect, useContext } from 'react';



export function AllPost() {
    let [allPost, setAllPost] = useState([])
    var token = useContext(AuthContext).isAuth.token;
    let [anyChange, setAnyChange] = useState(1)
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [title1, setTitle1] = useState('');
    let [category, setCategory] = useState('');
    let [author1, setAuthor1] = useState('');
    let [content, setContent] = useState('');


    // console.log('token',token)
    function fetchAllPost(token) {
        fetch('http://localhost:8080/post', {
            headers: {
                'Content-Type': 'application/json',
                token
            }
        }).then((res) => res.json())
            .then((data) => { setAllPost(data) })

    }

    async function submit(e) {
        // e.prevent.Default();
        console.log('creating post')
        let data = { title: title1, author: author1, category: category, content: content };
        console.log('data', data)
        await fetch('http://localhost:8080/post', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                token
            },
            body: JSON.stringify(data)
        })
        fetchAllPost(token)
    }

    async function updatePost(x) {
        setAnyChange((prev) => prev + 1)
        console.log('id', x)
        let data = { title, author }
        let check = await fetch(`http://localhost:8080/post/${x}`, {
            method: 'PATCH',
            headers: {
                token,
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({ title, author })
        })
        console.log('check', check)
        fetchAllPost(token)
        // console.log(anyChange)
    }
    async function deletePost(x) {
        // console.log(x)
        setAnyChange((prev) => prev + 1)
        console.log('fetch', `http://localhost:8080/post/${x}`)
        await fetch(`http://localhost:8080/post/${x}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                token
            }
        })
        fetchAllPost(token)
    }
    useEffect(() => { fetchAllPost(token) }, [token, anyChange])
    return (
        // <h1>All</h1>
        <>
            <div>
                <h2>Fill to Update</h2>
                <label>Title:-</label>
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ marginRight: "20px" }}
                />
                <label>Author:-</label>
                <input
                    type='text'
                    placeholder='author'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            {
                allPost.map((e) => (
                    <>
                        <h1>{e.title}</h1>
                        <button id={e._id} onClick={(e) => updatePost(e.target.id)}>Update</button>
                        <button id={e._id} onClick={(e) => deletePost(e.target.id)}>Delete</button>
                    </>
                ))
            }
            {/* <h1>post</h1> */}
            <h1>Add Post</h1>
            <form onSubmit={submit}>
                <input
                    text='text'
                    placeholder="title"
                    value={title1}
                    onChange={(e) => setTitle1(e.target.value)}
                />
                <input
                    text='text'
                    placeholder="author1"
                    value={author1}
                    onChange={(e) => setAuthor1(e.target.value)}
                />
                <input
                    text='text'
                    placeholder="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input
                    text='text'
                    placeholder="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <input
                    type="submit"
                />
            </form>
        </>




    )

}