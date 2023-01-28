import './styles.css'

export type AvatarProps = {
  imageURL: string
}

export const DAFAULT_IMAGE = 'https://www.w3schools.com/howto/img_avatar.png'

const Avatar = ({ imageURL }: AvatarProps) => {
  return imageURL.length === 0 ? (
    <img src={DAFAULT_IMAGE} className="image" />
  ) : (
    <img src={imageURL} className="image" />
  )
}

export default Avatar
