import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';


type ProfileImageProps = {
    profileImage: IGatsbyImageData
}
// Set profile image you like as a link.
const PROFILE_IMAGE_LINK = 
'https://notion-avatar.vercel.app/api/img/eyJmYWNlIjowLCJub3NlIjoxMCwibW91dGgiOjAsImV5ZXMiOjQsImV5ZWJyb3dzIjoyLCJnbGFzc2VzIjowLCJoYWlyIjoxNCwiYWNjZXNzb3JpZXMiOjAsImRldGFpbHMiOjAsImJlYXJkIjowLCJmbGlwIjowfQ=='

const ProfileImageWrapper = styled(GatsbyImage)`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;

    @media (max-width: 768px){
        width: 80px;
        height: 80px;
    }
`

const ProfileImage: FunctionComponent<ProfileImageProps> = function({
    profileImage,
}){
    return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage