import useAuthApi, {VerificationLoginId} from "@/api/useAuthApi";

async function getVerificationCode(verificationLoginId: VerificationLoginId) {
    return await useAuthApi.getVerificationCode(verificationLoginId)
}

export default getVerificationCode