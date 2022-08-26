export const includeAllRelations = {
  channel: true, // Author of the video
  comments: {
    channel: true // Author of the comment
  }
}

export const selectChannelPreview = {
  channel: { 
    id: true, 
    name: true, 
    avatarPath: true, 
    isVerified: true 
  }
}