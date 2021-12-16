const AvatarPosition = (w, h) => {
    let widthMid;
    let heightMid;
    if (h === 1) {
      let newHeight = h + 1;
      heightMid = Math.floor(newHeight / 2);
    } else {
      heightMid = Math.floor(h / 2);
    }
    if (w === 1) {
      let newWidth = w + 1;
      widthMid = Math.floor(newWidth / 2);
    } else {
      widthMid = Math.floor(w / 2);
    }

    return `${heightMid}${widthMid}`;
  };

  export default AvatarPosition