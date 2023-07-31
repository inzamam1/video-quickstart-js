// const $room = $("#room");
room = window.room;

function printmessage() {
  var localVideoTrack = Array.from(
    room.localParticipant.videoTracks.values()
  )[0].track;
  const imageCapture = new ImageCapture(localVideoTrack.mediaStreamTrack);

  imageCapture.takePhoto().then(function (blob) {
    var imageUrl = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.setAttribute("href", imageUrl);
    link.setAttribute("download", "image.jpg");
    link.click();
  });
  console.log(imageCapture);
}
