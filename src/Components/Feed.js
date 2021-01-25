import React, { useState, useEffect } from "react";
import "./feed.css";
import CreateIcon from "@material-ui/icons/Create";
import PhotoIcon from "@material-ui/icons/Photo";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EventIcon from "@material-ui/icons/Event";
import SubjectIcon from "@material-ui/icons/Subject";
import InputItem from "./InputItem";

import { useStateValue } from "./StateProvider";
import Post from "./Post";
import { db } from "./FirebaseData";
import firebase from "firebase";

function Feed() {
  const [input, setinput] = useState("");
  const [posts, setPosts] = useState([]);
  const [{user},dispatch] = useStateValue();
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const makePost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Tahidur Rahman",
      description: "Linkedin Clone",
      post: input,
      photoUrl:
        "https://www.alphansotech.com/wp-content/uploads/2019/03/5-home-page.jpg",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setinput("");
  };
  return (
    <div className="feed">
      <div className="create__post">
        <div className="input">
          <InputItem Icon={CreateIcon} Color="gray" />
          <form>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
            <button type="submit" onClick={makePost}>
              Post
            </button>
          </form>
        </div>
        <div className="input__options">
          <InputItem Icon={PhotoIcon} title="Photo" Color="#70b5f9" />
          <InputItem Icon={VideoLibraryIcon} title="Video" Color="#e7a33e" />
          <InputItem Icon={EventIcon} title="Event" Color="#a0b4b7" />
          <InputItem Icon={SubjectIcon} title="Write article" Color="#f5987e" />
        </div>
      </div>
      <hr />
      {posts.map(({ id, data: { name, description, post, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            post={post}
            photoUrl={photoUrl}
          />
        );
      })}
    </div>
  );
}

export default Feed;
