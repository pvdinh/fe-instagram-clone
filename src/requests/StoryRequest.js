import BaseRequest from "./BaseRequest";

class StoryRequest extends BaseRequest {
    getAllStoryFollowing() {
        let url = 'story'
        return this.get(url)
    }

    beginStory(story) {
        let url = 'story'
        return this.post(url,story)
    }

    endStory(pId) {
        let url = `story/${pId}/end`
        return this.delete(url)
    }
}
export default StoryRequest