room = window.room;

let screenTrack;

function screenshare() {
  navigator.mediaDevices
    .getDisplayMedia()
    .then((stream) => {
      screenTrack = new Twilio.Video.LocalVideoTrack(
        stream.getVideoTracks()[0],
        {
          name: "screen",
        }
      );
      room.localParticipant.publishTrack(screenTrack);
    })
    .catch((error) => {
      console.log(error);
      alert("Could not share the screen." + error);
    });
  console.log("sharing screen");
}
