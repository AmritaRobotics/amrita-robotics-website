"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Button, Paper, Grid, Container } from "@mui/material";
import { styled } from "@mui/system";

// Glassy Card style
const GlassCard = styled(Paper)(({ theme }) => ({
    backdropFilter: "blur(12px)",
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.04)",
    borderRadius: "18px",
    padding: theme.spacing(4),
    textAlign: "center",
    color: "#fff",
}));

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box sx={{ minHeight: "100vh", background: "linear-gradient(135deg, #06102b 0%, #0b1020 100%)" }}>
            {/* NAV */}
            <Box component="header" sx={{ position: "sticky", top: 12, zIndex: 60 }}>
                <Paper
                    elevation={0}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: 2,
                        m: 2,
                        borderRadius: "999px",
                        backdropFilter: "blur(8px)",
                        background: "rgba(255,255,255,0.03)",
                        boxShadow: "0 8px 30px rgba(2,6,23,0.6)",
                    }}
                >
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "inherit" }}>
                        <Image src="/images/AR.jpg" alt="Amrita Robotics" width={40} height={40} />
                        <Typography variant="h6" fontWeight={700}>
                            Amrita Robotics
                        </Typography>
                    </Link>

                    <Box>
                        <Button
                            onClick={() => setIsOpen(!isOpen)}
                            variant="outlined"
                            sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.06)" }}
                        >
                            Menu
                        </Button>
                        {isOpen && (
                            <Box sx={{ display: "flex", gap: 2, mt: 1, flexDirection: "column" }}>
                                <Link href="/">Home</Link>
                                <Link href="/team">Team</Link>
                                <Link href="/about">About</Link>
                                <Link href="/contact">Contact</Link>
                            </Box>
                        )}
                    </Box>
                </Paper>
            </Box>

            {/* HERO */}
            <Box sx={{ position: "relative", height: "92vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.45) contrast(1.05)",
                        zIndex: 0,
                    }}
                >
                    <source src="/videos/Robot_Metal_Zoom_Out.mp4" type="video/mp4" />
                </video>

                <GlassCard sx={{ maxWidth: "920px", zIndex: 1 }}>
                    <Typography variant="h2" sx={{ mb: 1 }}>
                        Amrita Robotics
                    </Typography>
                    <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", mb: 2 }}>
                        Innovating & competing at <strong>ABU Robocon 2026</strong>
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                        <Button variant="contained" sx={{ background: "linear-gradient(90deg, #4cc9f0,#2ab0e3)", color: "#021423" }} component={Link} href="/team">
                            Meet the Team
                        </Button>
                        <Button variant="outlined" sx={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.06)" }} component={Link} href="/about">
                            Our Story
                        </Button>
                    </Box>
                </GlassCard>
            </Box>

            {/* Work Photos */}
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" align="center" sx={{ mb: 2 }}>
                    Our Work
                </Typography>
                <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: "rgba(255,255,255,0.7)" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. We build, test & iterate.
                </Typography>

                <Grid container spacing={3}>
                    {["photo1", "photo2", "photo3", "photo4"].map((img, idx) => (
                        <Grid item xs={12} sm={6} md={3} key={idx}>
                            <Paper
                                elevation={3}
                                sx={{
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    height: 220,
                                    background: `url(/images/${img}.jpg) center/cover no-repeat`,
                                    transition: "transform 0.28s",
                                    "&:hover": { transform: "translateY(-6px)" },
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* FOOTER */}
            <Box sx={{ textAlign: "center", py: 3, color: "rgba(255,255,255,0.7)" }}>
                <Typography>© 2026 Amrita Robotics — Built for ABU Robocon 2026</Typography>
            </Box>
        </Box>
    );
}
