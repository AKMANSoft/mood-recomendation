import axios from "axios";
import React, { useState } from "react";
import { useAudioRecorder } from 'react-audio-voice-recorder';


const PROCESS_AUDIO_URL = "/process-audio"

function Mice() {
    const axiosController = new AbortController();
    const [recordedAudio, setRecordedAudio] = useState(null);
    const [audioProcessedResult, setAudioProcessedResult] = useState(null);
    const [processingAudio, setProcessingAudio] = useState(false);
    const { startRecording, stopRecording, recordingTime, recordingBlob, isRecording } = useAudioRecorder();

    const toggleRecording = () => {
        if (isRecording) stopRecording();
        else {
            setAudioProcessedResult(null);
            startRecording();
        }
    }

    React.useEffect(() => {
        if (!recordingBlob || recordingBlob === null || audioProcessedResult !== null) return;
        setRecordedAudio(recordingBlob)
    }, [recordingBlob])


    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var seconds = seconds % 60;
        return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }


    const startProcessingAudio = () => {
        if (!recordedAudio || recordedAudio === null) return;
        setProcessingAudio(true);
        setAudioProcessedResult(null);
        const data = new FormData();
        data.append("file", recordedAudio, `${Date.now()}.ogg`)
        axios.post(
            PROCESS_AUDIO_URL, data,
            {
                signal: axiosController.signal
            }
        )
            .then((response) => {
                if (response.status !== 200) throw new Error(response);
                setAudioProcessedResult(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setProcessingAudio(false);
                setRecordedAudio(null);
            })

    }

    const discardAudio = () => {
        setRecordedAudio(null);
        setProcessingAudio(false);
    }


    const cancelProcessing = () => {
        axiosController.abort();
        setRecordedAudio(null);
        setAudioProcessedResult(null);
        setProcessingAudio(false);
    }


    return (
        <main>

            <div className="">
                <div className="">
                    <div className="transition-all flex flex-col justify-center items-center duration-500 border-0 border-gray-200 z-[3] ">
                        {
                            !processingAudio ?
                                <>
                                    {
                                        recordedAudio === null ?
                                            <div className={"flex flex-col gap-3 mt-3 lg:mt-0 items-center justify-center relative " + (isRecording ? "" : "my-10")}>
                                                <button type="button" onClick={toggleRecording} className="btn-mic absolute inset-auto">
                                                    <i className={"bi bi-mic text-3xl"}></i>
                                                </button>
                                                <div className={"ripple w-96 max-w-[380px] -z-[1] " + (isRecording ? "h-96" : "!max-h-0 opacity-0")}>
                                                    <div className="circle"></div>
                                                    <div className="circle"></div>
                                                    <div className="circle"></div>
                                                    <div className="circle"></div>
                                                </div>
                                            </div>
                                            :
                                            <div className="h-full flex flex-col gap-5 mt-20 lg:mt-0 items-center justify-center">
                                                {
                                                    recordedAudio !== null &&
                                                    <audio src={window.URL.createObjectURL(recordedAudio)} preload="metadata" controls></audio>
                                                }
                                                <div className="flex flex-wrap gap-2 mt-3 lg:mt-0 justify-center items-center">
                                                    <button type="button" onClick={discardAudio}
                                                        className="bg-red-600 hover:bg-red-600/80 text-white px-5 py-2 rounded-full">
                                                        { "Discard"}
                                                    </button>
                                                    <button type="button" onClick={startProcessingAudio}
                                                        className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded-full transition-all">
                                                        { "Process your audio with Mirroor AI"}
                                                    </button>
                                                </div>
                                            </div>
                                    }
                                    {
                                        isRecording &&
                                        <div className="flex w-full max-w-[380px] justify-center">
                                            <p className="text-3xl font-bold text-primary">{formatTime(recordingTime)}</p>
                                        </div>
                                    }
                                </>
                                :
                                <div id="audioProcessingSpinner" className="h-full lg:min-w-[380px] flex flex-col gap-5 items-center justify-center">
                                    <div role="status" className="relative">
                                        <svg aria-hidden="true"
                                            className="w-32 h-32 text-gray-200 animate-spin dark:text-gray-200 fill-primary"
                                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor" />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill" />
                                        </svg>
                                    </div>
                                    <p className="text-lg text-gray-500">
                                        { "Processing your audio..."}
                                    </p>
                                </div>
                        }
                        {/* Text below microphone */}
                        <div className="lg:w-1/2 mt-2 lg:min-w-[380px] transition-all duration-500 z-[3]">
                            <div className="h-full flex items-center justify-center lg:justify-start">
                                <h1 className="text-xl md:text-2xl text-center font-medium w-full lg:max-w-md">
                                    {
                                        isRecording ?
                                            <span>
                                                {"Recording started."}
                                                <br />
                                                {"Listening..."}
                                                <br /> <br />
                                                <span>
                                                    {
                                                        <>
                                                            Tap on the mic
                                                            <i className="bi bi-mic px-2 text-primary"></i>
                                                            again to stop recording.
                                                        </>
                                                    }
                                                </span>
                                            </span>
                                            :
                                            recordedAudio !== null ?
                                                processingAudio ?
                                                    <>
                                                        {
                                                            <span>
                                                                Processing your audio. <br /><br />
                                                                Results will be displayed below after processing.
                                                            </span>
                                                        }
                                                    </>
                                                    :
                                                    <span>

                                                    </span>
                                                :
                                                <>
                                                    {

                                                        <span>
                                                            Tap on the mic
                                                            <i className="bi bi-mic px-2 text-primary"></i>
                                                            <br /> to start recording <br /> your voice.
                                                        </span>
                                                    }

                                                </>

                                    }
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    (audioProcessedResult && audioProcessedResult != null && audioProcessedResult.succeed) &&
                    <div className="flex items-center justify-center max-w-screen-xl mx-auto pb-20">
                        {
                            audioProcessedResult.response.transcription.trim().length > 0 ?
                                <p className="text-xl font-normal text-black text-center">
                                    {audioProcessedResult.response.transcription}
                                </p>
                                :
                                <p className="text-xl font-normal text-red-600 text-center">
                                    No transcription. <br />
                                    Make sure your audio contains a speech or audio that can be recognized.
                                </p>
                        }
                    </div>
                }
            </div>
            {
                (audioProcessedResult?.succeed === false) ?
                    <div className="flex items-center justify-center mt-16 mb-4">
                        <p className="py-3 px-5 text-lg font-medium bg-red-100 text-red-700 rounded-md text-center">
                            Got some issue while processing your audio. <br />
                            Make sure your audio contains a speech or audio that can be recognized.
                        </p>
                    </div>
                    : <></>
            }
        </main>
    )
}

export default Mice
