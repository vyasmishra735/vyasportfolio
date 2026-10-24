import React from 'react';

/**
 * Bespoke SVG technical visualizations for projects.
 * Avoids fake generic stock photos and provides authentic, high-tech architectural diagrams.
 */

export function SafetyComplianceVisual() {
  return (
    <div
      className="relative w-full h-full min-h-[260px] md:min-h-[340px] rounded-xl overflow-hidden bg-[#0F1116] flex items-center justify-center p-6 border border-[rgba(255,255,255,0.06)]"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '280px',
        borderRadius: '12px',
        backgroundColor: '#0F1116',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      {/* Background camera viewport grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(213, 183, 121, 0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <svg viewBox="0 0 460 280" className="w-full h-full max-w-[420px] select-none" fill="none">
        {/* Viewport Frame */}
        <rect x="10" y="10" width="440" height="260" rx="8" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Camera HUD Telemetry */}
        <text x="24" y="32" fill="#D5B779" fontSize="10" fontFamily="monospace" letterSpacing="0.1em">
          CAM_01 // INFERENCE: YOLO11-L // FPS: 29.4
        </text>
        <circle cx="430" cy="28" r="4" fill="#6DCCAE" />
        <text x="390" y="32" fill="#6DCCAE" fontSize="9" fontFamily="monospace">
          LIVE
        </text>

        {/* Bounding Box 1: Worker with Helmet & Vest (Compliant) */}
        <g transform="translate(60, 60)">
          {/* Bounding Box */}
          <rect x="0" y="0" width="130" height="170" rx="4" stroke="#6DCCAE" strokeWidth="1.5" fill="rgba(109, 204, 174, 0.05)" />
          {/* Label Badge */}
          <rect x="0" y="-18" width="130" height="18" fill="#6DCCAE" rx="2" />
          <text x="6" y="-5" fill="#0B0C0F" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
            ID:01 | HELMET 98%
          </text>
          {/* Sub-box: Helmet */}
          <rect x="35" y="15" width="60" height="40" rx="3" stroke="#D5B779" strokeWidth="1" fill="rgba(213, 183, 121, 0.15)" strokeDasharray="2 2" />
          {/* Sub-box: Vest */}
          <rect x="25" y="65" width="80" height="85" rx="3" stroke="#6DCCAE" strokeWidth="1" fill="rgba(109, 204, 174, 0.1)" strokeDasharray="2 2" />
        </g>

        {/* Bounding Box 2: Worker in Restricted Zone (Warning) */}
        <g transform="translate(240, 75)">
          {/* Bounding Box */}
          <rect x="0" y="0" width="125" height="155" rx="4" stroke="#D5B779" strokeWidth="1.5" fill="rgba(213, 183, 121, 0.06)" />
          {/* Label Badge */}
          <rect x="0" y="-18" width="125" height="18" fill="#D5B779" rx="2" />
          <text x="6" y="-5" fill="#0B0C0F" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
            ID:02 | PPE_CHECK 92%
          </text>
          {/* Perimeter alert vector line */}
          <line x1="-30" y1="130" x2="155" y2="130" stroke="#E26D5C" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="-25" y="145" fill="#E26D5C" fontSize="8.5" fontFamily="monospace">
            ZONE PERIMETER
          </text>
        </g>

        {/* Bottom Status bar */}
        <rect x="10" y="240" width="440" height="30" fill="rgba(18, 19, 24, 0.85)" />
        <text x="24" y="260" fill="#A4A7B0" fontSize="9.5" fontFamily="monospace">
          COMPLIANCE SCORE: 96.8% • EVENTS LOGGED: 14 • REALTIME STREAM
        </text>
      </svg>
    </div>
  );
}

export function LaneViolationVisual() {
  return (
    <div
      className="relative w-full h-full min-h-[260px] md:min-h-[340px] rounded-xl overflow-hidden bg-[#0F1116] flex items-center justify-center p-6 border border-[rgba(255,255,255,0.06)]"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '280px',
        borderRadius: '12px',
        backgroundColor: '#0F1116',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(109, 204, 174, 0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <svg viewBox="0 0 460 280" className="w-full h-full max-w-[420px] select-none" fill="none">
        {/* Frame */}
        <rect x="10" y="10" width="440" height="260" rx="8" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        
        {/* Header HUD */}
        <text x="24" y="32" fill="#6DCCAE" fontSize="10" fontFamily="monospace" letterSpacing="0.1em">
          TRAFFIC_VISION_AI // OPENCV_LANE_TRACKER
        </text>
        <circle cx="430" cy="28" r="4" fill="#6DCCAE" />

        {/* Perspective Road Lane Lines */}
        <path d="M 120 250 L 195 90" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="8 6" />
        <path d="M 230 250 L 230 90" stroke="#D5B779" strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M 340 250 L 265 90" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="8 6" />

        {/* Vehicle 1 in Lane (Compliant) */}
        <g transform="translate(135, 140)">
          <rect x="0" y="0" width="60" height="80" rx="4" stroke="#6DCCAE" strokeWidth="1.5" fill="rgba(109, 204, 174, 0.1)" />
          <text x="0" y="-8" fill="#6DCCAE" fontSize="9" fontFamily="monospace">
            V-01 | 58 km/h
          </text>
          <line x1="30" y1="0" x2="30" y2="-20" stroke="#6DCCAE" strokeWidth="1.5" />
          <polygon points="30,-22 26,-16 34,-16" fill="#6DCCAE" />
        </g>

        {/* Vehicle 2 (Lane Boundary Crossing Violation) */}
        <g transform="translate(210, 115)">
          <rect x="0" y="0" width="65" height="75" rx="4" stroke="#E26D5C" strokeWidth="2" fill="rgba(226, 109, 92, 0.15)" />
          {/* Violation Tag */}
          <rect x="-10" y="-22" width="125" height="18" fill="#E26D5C" rx="2" />
          <text x="-4" y="-9" fill="#FFFFFF" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
            VIOLATION: CROSS_LANE
          </text>
          {/* Crossing Vector */}
          <line x1="10" y1="40" x2="-25" y2="40" stroke="#E26D5C" strokeWidth="2" />
          <circle cx="-25" cy="40" r="3" fill="#E26D5C" />
        </g>

        {/* Telemetry bottom */}
        <rect x="10" y="240" width="440" height="30" fill="rgba(18, 19, 24, 0.85)" />
        <text x="24" y="260" fill="#A4A7B0" fontSize="9.5" fontFamily="monospace">
          LANE_DRIFT_ALERT: LOGGED // TIMESTAMP: 10:14:02 // CAM: NORTH_CORRIDOR
        </text>
      </svg>
    </div>
  );
}

export function TumourDelineationVisual() {
  return (
    <div
      className="relative w-full h-full min-h-[260px] md:min-h-[340px] rounded-xl overflow-hidden bg-[#0F1116] flex items-center justify-center p-6 border border-[rgba(255,255,255,0.06)]"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '280px',
        borderRadius: '12px',
        backgroundColor: '#0F1116',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(213, 183, 121, 0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <svg viewBox="0 0 460 280" className="w-full h-full max-w-[420px] select-none" fill="none">
        {/* Frame */}
        <rect x="10" y="10" width="440" height="260" rx="8" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        
        {/* HUD */}
        <text x="24" y="32" fill="#D5B779" fontSize="10" fontFamily="monospace" letterSpacing="0.1em">
          BIO_MED_AI // VOLUMETRIC SEGMENTATION MASK
        </text>
        <circle cx="430" cy="28" r="4" fill="#D5B779" />

        {/* Anatomical Contour Slice Simulation */}
        <ellipse cx="230" cy="140" rx="140" ry="85" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <ellipse cx="230" cy="140" rx="115" ry="65" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* Crosshair coordinate lines */}
        <line x1="230" y1="50" x2="230" y2="230" stroke="rgba(213, 183, 121, 0.15)" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="90" y1="140" x2="370" y2="140" stroke="rgba(213, 183, 121, 0.15)" strokeWidth="1" strokeDasharray="2 2" />

        {/* Tumour Segmented Region with Contour Heatmap */}
        <g transform="translate(250, 110)">
          {/* Gradient definitions */}
          <path
            d="M 10 20 C 30 5, 55 10, 65 30 C 75 50, 60 70, 40 75 C 20 80, 5 65, 0 45 C -5 30, -5 25, 10 20 Z"
            fill="rgba(213, 183, 121, 0.25)"
            stroke="#D5B779"
            strokeWidth="1.8"
          />
          <path
            d="M 18 28 C 30 18, 48 20, 54 35 C 60 48, 50 60, 36 62 C 22 65, 12 55, 10 40 Z"
            fill="rgba(213, 183, 121, 0.45)"
            stroke="#F3E5AB"
            strokeWidth="1"
          />
          {/* Margin Marker Pin */}
          <line x1="65" y1="30" x2="110" y2="10" stroke="#D5B779" strokeWidth="1" />
          <circle cx="110" cy="10" r="3" fill="#D5B779" />
          <text x="118" y="14" fill="#D5B779" fontSize="8.5" fontFamily="monospace">
            MARGIN DELINEATION
          </text>
        </g>

        {/* Metrics bottom bar */}
        <rect x="10" y="240" width="440" height="30" fill="rgba(18, 19, 24, 0.85)" />
        <text x="24" y="260" fill="#6DCCAE" fontSize="9.5" fontFamily="monospace">
          DICE_COEFF: 0.892 • IoU: 0.814 • ARCHITECTURE: U-NET / RES-ENCODER
        </text>
      </svg>
    </div>
  );
}
