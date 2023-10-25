import React from "react";
import profile from "../assets/profile.webp";
import PageWrapper from "../components/PageWrapper";

function UserProfile() {
    return (
        <PageWrapper>
            <div
                className="profile-container"
                style={{
                    maxWidth: "800px",
                    margin: "20px auto",
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
            >
                <div className="profile-image" style={{ textAlign: "center" }}>
                    <img
                        src={profile}
                        alt="Profile Picture"
                        style={{
                            width: "150px",
                            height: "150px",
                            borderRadius: "50%",
                        }}
                    />
                </div>

                <div
                    className="profile-info"
                    style={{ textAlign: "left", margin: "20px" }}
                >
                    <center>
                        <p>
                            <strong>Name:</strong>User name
                        </p>
                        <p>
                            <strong>Age:</strong>User age
                        </p>
                        <p>
                            <strong>Place:</strong> User place
                        </p>
                        <p>
                            <strong>Joined at:</strong> Date
                        </p>
                    </center>
                </div>

                <div
                    className="logout-button"
                    style={{ textAlign: "center", marginTop: "20px" }}
                >
                    <button
                        style={{
                            backgroundColor: "#333",
                            color: "#fff",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </PageWrapper>
    );
}

export default UserProfile;
