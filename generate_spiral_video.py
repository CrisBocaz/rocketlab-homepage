#!/usr/bin/env python3
import numpy as np
import cv2
import math
import os

# Config
WIDTH = 1920
HEIGHT = 1080
FPS = 30
DURATION = 10  # segundos
TOTAL_FRAMES = FPS * DURATION

# Colores (Rocketlab palette) - BGR para OpenCV
NAVY = (42, 27, 13)  # BGR #0D1B2A
STEEL_GRAY = (115, 98, 82)  # BGR #526273
GOLD = (106, 168, 201)  # BGR #C9A86A
BLACK = (10, 10, 10)

def generate_spiral_frame(frame_num, total_frames):
    """Generate a single spiral frame with depth effect"""
    # Create black background
    frame = np.zeros((HEIGHT, WIDTH, 3), dtype=np.uint8)
    frame[:] = BLACK

    # Center
    cx = WIDTH // 2
    cy = HEIGHT // 2

    # Spiral parameters
    t_offset = (frame_num / total_frames) * 8 * math.pi
    max_radius = 500
    turns = 8

    # Draw radial gradient background
    for y in range(HEIGHT):
        for x in range(WIDTH):
            dist = math.sqrt((x - cx)**2 + (y - cy)**2)
            ratio = min(dist / 600, 1.0)
            # Fade from navy to black
            factor = 1.0 - ratio * 0.7
            frame[y, x] = (
                int(NAVY[0] * factor),
                int(NAVY[1] * factor),
                int(NAVY[2] * factor)
            )

    # Draw spiral with multiple layers for depth
    num_points = 300

    for layer in range(3):
        layer_offset = layer * (8 * math.pi / 3)
        layer_brightness = 1.0 - (layer * 0.3)

        points = []
        for i in range(num_points):
            progress = i / num_points
            t = progress * turns * 2 * math.pi + t_offset + layer_offset
            r = progress * max_radius

            x = int(cx + r * math.cos(t))
            y = int(cy + r * math.sin(t))

            # Depth effect - fade with distance
            alpha = layer_brightness * (1 - progress * 0.3)
            brightness = int(255 * alpha)

            if progress < 0.7:
                color = (
                    int(GOLD[0] * alpha),
                    int(GOLD[1] * alpha),
                    int(GOLD[2] * alpha)
                )
            else:
                color = (
                    int(STEEL_GRAY[0] * alpha),
                    int(STEEL_GRAY[1] * alpha),
                    int(STEEL_GRAY[2] * alpha)
                )

            if points:
                cv2.line(frame, points[-1], (x, y), color, 3)

            points.append((x, y))

    # Draw orbiting elements (4 dots)
    orbit_speed = frame_num / total_frames
    for i in range(4):
        angle = (i * math.pi / 2) + (orbit_speed * 4 * math.pi)
        orbit_radius = 250

        ox = int(cx + orbit_radius * math.cos(angle))
        oy = int(cy + orbit_radius * math.sin(angle))

        # Draw dot with glow
        glow_radius = 25
        for glow in range(glow_radius, 0, -3):
            alpha = (1 - glow / glow_radius) * 0.5
            color = (
                int(GOLD[0] * alpha),
                int(GOLD[1] * alpha),
                int(GOLD[2] * alpha)
            )
            cv2.circle(frame, (ox, oy), glow, color, -1)

        # Center dot
        cv2.circle(frame, (ox, oy), 8, GOLD, -1)

    # Subtle vignette
    for y in range(HEIGHT):
        for x in range(WIDTH):
            dist = math.sqrt((x - cx)**2 + (y - cy)**2)
            vignette = 1.0 - min(dist / 800, 1.0) * 0.3
            frame[y, x] = (frame[y, x] * vignette).astype(np.uint8)

    return frame

def main():
    print("🎬 Generating spiral video...")

    output_path = 'public/videos/spiral.mp4'
    os.makedirs('public/videos', exist_ok=True)

    # Create video writer
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, FPS, (WIDTH, HEIGHT))

    for frame_num in range(TOTAL_FRAMES):
        if frame_num % 30 == 0:
            print(f"  Frame {frame_num}/{TOTAL_FRAMES}")

        frame = generate_spiral_frame(frame_num, TOTAL_FRAMES)
        out.write(frame)

    out.release()

    print(f"✅ Video saved to {output_path}")
    print(f"   Resolution: {WIDTH}x{HEIGHT}")
    print(f"   Duration: {DURATION}s @ {FPS}fps")

if __name__ == '__main__':
    main()
