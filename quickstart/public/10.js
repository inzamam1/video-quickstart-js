"use strict";

function muteOrUnmuteYourMedia(room, kind, action) {
  console.log("Local Media control Event: ", kind, action);
  if (kind === "data") return;
  const publications =
    kind === "audio"
      ? room.localParticipant.audioTracks
      : room.localParticipant.videoTracks;

  publications.forEach(function (publication) {
    if (action === "mute") {
      publication.track.disable();
    } else {
      publication.track.enable();
    }
  });
}

function muteYourVideo(room, muteVideoBtn) {
  muteVideoBtn.classList.add("muted");
  muteOrUnmuteYourMedia(room, "video", "mute");
}

function unmuteYourVideo(room, muteVideoBtn) {
  muteVideoBtn.classList.remove("muted");
  muteOrUnmuteYourMedia(room, "video", "unmute");
}

function muteYourAudio(room, muteAudioBtn) {
  muteAudioBtn.classList.add("muted");
  muteOrUnmuteYourMedia(room, "audio", "mute");
}

function unmuteYourAudio(room, muteAudioBtn) {
  muteAudioBtn.classList.remove("muted");
  muteOrUnmuteYourMedia(room, "audio", "unmute");
}

exports.muteYourVideo = muteYourVideo;
exports.unmuteYourVideo = unmuteYourVideo;
exports.muteYourAudio = muteYourAudio;
exports.unmuteYourAudio = unmuteYourAudio;
